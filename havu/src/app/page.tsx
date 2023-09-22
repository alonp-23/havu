"use client";

import {
  Grid,
  Card,
  Stack,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { BaseLayout } from "./(common)/layout/base-layout";
import { groups } from "./(mock)";

//TODO: remove mock
const Home = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <Stack spacing={1}>
        {groups.map(({ id, name, members }) => (
          <Card sx={{ width: "80vw" }} key={id}>
            <CardActionArea
              onClick={() => router.push(`/group/${id}`)}
              sx={{ padding: "10px" }}
            >
              <CardContent>
                <Typography variant="h3">{name}</Typography>
                <Typography>members: {members.length}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </BaseLayout>
  );
};

export default Home;
