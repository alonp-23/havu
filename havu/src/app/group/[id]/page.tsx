"use client";

import {
  Stack,
  Card,
  CardActionArea,
  CardContent,
  Typography,
	Grid,
	ButtonGroup,
	IconButton,
	Button,
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import NotSureIcon from '@mui/icons-material/QuestionMark';
import { groups } from "@/app/(mock)";
import { BaseLayout } from "@/app/(common)/layout/base-layout";
import { Group, MemeberStatus } from "@/app/(common)";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/(contexts)/auth";

interface GroupPageProps {
  params: { id: string };
}

export const generateStaticParams = async () => {
  return groups.map(({ id }) => ({
    id,
  }));
};

//TODO: remove mock
const GroupPage = ({ params: { id } }: GroupPageProps) => {
  const [group, setGroup] = useState<Group>();
	const { user } = useAuth();

  useEffect(() => {
    const selectedGroup = groups.find((x) => x.id === id);

    setGroup(selectedGroup);
  }, []);

	const updateUserStatus = (updatedStatus: MemeberStatus) => {
		setGroup(updatedGroup => {
				if (updatedGroup) {
					updatedGroup.members[updatedGroup?.members.findIndex(x => x.id === user?.id)].status = updatedStatus;
				}

				return {...updatedGroup} as Group;
			});
	};

	const IconDictionary = {
		[MemeberStatus.Approve]: <CheckIcon />,
		[MemeberStatus.Decline]: <CloseIcon />,
		[MemeberStatus.Pending]: <NotSureIcon />
	};

  return (
    <BaseLayout>
			<Grid padding='10px' container height='100%' direction='column' alignItems='center' justifyContent='space-between'>
				<Stack spacing={1}>
					{group?.members.map(({ name, status }) => (
						<Card sx={{ width: "80vw" }} key={name}>
							<CardActionArea sx={{ padding: "10px" }}>
								<CardContent
									sx={{ display: "flex", justifyContent: "space-between" }}
								>
									<Typography variant="h3">{name}</Typography>
									<Typography variant="h3">
										{
											IconDictionary[status]
										}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</Stack>
				<ButtonGroup sx={{marginBottom: '100px'}}>
					<Button onClick={() => updateUserStatus(MemeberStatus.Approve)}>
						<CheckIcon />
					</Button>
					<Button onClick={() => updateUserStatus(MemeberStatus.Pending)}>
						<NotSureIcon />
					</Button>
					<Button onClick={() => updateUserStatus(MemeberStatus.Decline)}>
						<CloseIcon />
					</Button>
				</ButtonGroup>
			</Grid>
    </BaseLayout>
  );
};

export default GroupPage;
