/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import Layout from "../components/Layout";

export default function PartnershipsPage(): ReactElement {
	return <Layout title={"Partnerships"} className={"PartnershipsPage"}>
		<h2>Industry Partners</h2>
		<div className={"grid"}>
			<img src={"nasa.png"} alt={"nasa"}/>
			<img src={"honeybee.png"} alt={"honeybee"}/>
			<img src={"mtu.png"} alt={"mtu"}/>
		</div>
	</Layout>
}
