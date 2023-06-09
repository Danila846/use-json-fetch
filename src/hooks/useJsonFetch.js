import { useState, useEffect } from 'react';


export default function useJsonFetch(url, opts) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		try {
			fetch(url)
				.then((response) => response.json())
				.then((data) => setData(data))
				.then(() => setLoading(false))
		} catch (e) {
			setError(e)
		}
	}, [url])

	return [{ data, loading, error }];
}