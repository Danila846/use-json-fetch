import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";


export default function Data({ url, props }) {
	const [{ data, loading, error }] = useJsonFetch(url);

	return (
		<div>
			{data && <div className="data">{data.status}</div>}
			{loading && <div className="loading">Loading...</div>}
			{error && <div className="error"></div>}
		</div>

	)
}