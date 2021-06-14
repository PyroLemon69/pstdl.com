/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import Layout from "../components/Layout";
import {Publication} from "../interfaces/Publication";
import {GetServerSideProps, GetStaticProps} from "next";
import {publications} from "../data/publications";
import {pDateCompare, pDateToString} from "../interfaces/Date";
import {AstraBackground} from "../components/Astra";

export interface PublicationsPageProps {
	publications: Publication[];
}

export default function PublicationsPage(props: PublicationsPageProps): ReactElement {
	return <Layout disableDefault title={"Publications"} className={"PublicationsPage"}>
		<AstraBackground/>
		<h2>Publications</h2>
		<div className={"content"}>
			<table className={"publications"}>
				<thead>
				<tr className={"header"}>
					<th className={"title"}>Title</th>
					<th className={"date"}>Date</th>
					<th className={"authors"}>Authors</th>
					<th className={"publications"}>Publication</th>
				</tr>
				</thead>
				<tbody>
				{props.publications.map((publication, i) => {
					return (
						<tr className={"row"} key={i}>
							<td className={"titleRow"}>{publication.title}</td>
							<td className={"dateRow"}>{pDateToString(publication.date)}</td>
							<td>{publication.authors.join(", ")}</td>
							<td>{publication.publication}</td>
						</tr>
					)
				})}
				</tbody>
			</table>
		</div>
	</Layout>
}

export const getStaticProps: GetStaticProps<PublicationsPageProps> = async () => {
	return { props: { publications: publications.sort((a, b) => pDateCompare(a.date, b.date)) } }
}
