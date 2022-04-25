import useSWR, { SWRConfiguration } from 'swr';
import { IProduct } from '../src/interface';

// const fetcher = (...args:[key: string]) => fetch(...args).then(res => res.json());

export const useProduct = (url: string, config: SWRConfiguration = {}) => {
	// const { data, error } = useSWR<IProduct[]>(`/api${ url }`, fetcher, config );
	// const { data, error } = useSWR<IProduct[]>(`https://choco.team-308609.repl.co/api${ url }`,  config );
	const { data, error } = useSWR<IProduct[]>(
		`https://adminrestwebserver.herokuapp.com/api${url}`,
		config
	);
	// const { data, error } = useSWR<IProductP[]>(`http://localhost:3000/api${ url }`,  config );
	return {
		products: data || [],
		isLoading: !error && !data,
		isError: error
	};
};
