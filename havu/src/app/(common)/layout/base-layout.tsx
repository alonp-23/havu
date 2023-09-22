import { Grid } from "@mui/material";
import { ParentProps } from "@/types/parent-component";

export const BaseLayout = ({children}: ParentProps) => (
	<Grid container height="100vh" alignItems="center" direction="column">
		{children}
	</Grid>
);