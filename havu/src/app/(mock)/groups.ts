import { alon, landau, rdt, shaqs } from "./members";
import { Group } from "../(common)";
import { MemeberStatus } from "../(common)/constants/member-status";

export const groups: Group[] = [
  {
		id: '12345',
    name: "Yanis",
    members: [
      {
        ...alon,
				status: MemeberStatus.Approve
      },
      {
        ...shaqs,
				status: MemeberStatus.Decline
      },
    ],
  },
  {
		id: '13579',
    name: "Havu Roglit",
    members: [
      {
        ...alon,
				status: MemeberStatus.Decline
      },
      {
        ...rdt,
				status: MemeberStatus.Decline
      },
      {
        ...landau,
				status: MemeberStatus.Decline
      },
    ],
  },
];
