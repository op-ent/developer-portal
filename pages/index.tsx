import {
  Box,
  Group,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Paper,
  PaperProps,
  Button,
  Anchor,
  Container,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { useCSV } from "~/hooks/useColorSchemeValue";
import client from "~/lib/client";
import TempButton from "~/components/atoms/Button";

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function (props: PaperProps<"div">) {
  let res;

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const testFetch = async () => {
    setLoading(true);
    res = await client.auth.register({
      email: "admin@admin.com",
      password: "test",
    });
    console.log(res);
    setLoading(false);
  };

  const [dark, setDark] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        sx={(theme) => ({
          backgroundColor: useCSV(theme.colors.brand[6], theme.colors.brand[7]),
        })}
      >
        <Container size="xl" px="md" py="xl">
          <Group direction="row" grow>
            <Box
              sx={(theme) => ({
                color: theme.white,
              })}
            >
              <Title order={1} mb="xl">
                DEVELOPER PORTAL
              </Title>
              <Text mb="md">Create and manage app accesses to op-ent.</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus laudantium necessitatibus, aut corporis voluptas magni
                vitae quibusdam earum tempore. Vero optio illo commodi ab
                ratione delectus atque veritatis, esse accusantium pariatur
                itaque obcaecati quibusdam dolore ea cum? Quas vel eaque,
                beatae, mollitia sequi ipsum iure voluptatum repellendus
                molestias omnis a?
              </Text>
            </Box>
            <Paper radius="md" p="xl" withBorder {...props}>
              <Title order={2} mb="lg">
                LOGIN
              </Title>
              <form onSubmit={form.onSubmit(() => {})}>
                <Group direction="column" grow>
                  <TextInput
                    id="email"
                    required
                    label="Email"
                    placeholder="hello@mantine.dev"
                    value={form.values.email}
                    onChange={(event) =>
                      form.setFieldValue("email", event.currentTarget.value)
                    }
                    error={form.errors.email && "Invalid email"}
                  />
                  <PasswordInput
                    id="password"
                    required
                    label="Password"
                    placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) =>
                      form.setFieldValue("password", event.currentTarget.value)
                    }
                    error={
                      form.errors.password &&
                      "Password should include at least 6 characters"
                    }
                  />
                </Group>
                <Group position="apart" mt="xl">
                  <Link href="#" passHref>
                    <Anchor component="a" color="gray" size="xs">
                      Don't have an account? Register
                    </Anchor>
                  </Link>
                  <Button type="submit" uppercase>
                    Login
                  </Button>
                </Group>
              </form>
              <Button uppercase onClick={testFetch} loading={loading}>
                TEST FETCH
              </Button>
              {res && <pre>{JSON.stringify(res)}</pre>}
            </Paper>
          </Group>
        </Container>
      </Box>
      {[
        "tomato",
        "red",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "indigo",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "grass",
        "orange",
        "brown",
        "sky",
        "mint",
        "lime",
        "yellow",
        "amber",
        "gray",
        "mauve",
        "slate",
        "sage",
        "olive",
        "sand",
        "gold",
        "bronze",
      ].map((color) => (
        <div key={color} className="flex space-x-2 m-4">
          <TempButton color={color}>Solid</TempButton>
          <TempButton color={color} variant="outline">
            Outline
          </TempButton>
          <TempButton color={color} variant="ghost">
            Ghost
          </TempButton>
        </div>
      ))}
    </>
  );
}