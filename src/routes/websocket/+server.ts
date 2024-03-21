import ws from 'ws';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
		  const websocket = new ws("wss://pg2.arcana-energy.co.jp");
	
	return new Response();
	}