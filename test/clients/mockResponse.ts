import { Response } from 'superagent';

type ResponseInit = {
  status: number;
  data?: unknown;
  text?: string;
  statusText?: string;
  type?: string;
};

export const buildResponse = ({
  status,
  data,
  text = '',
  statusText,
  type = 'application/json'
}: ResponseInit): Response => {
  const derivedStatusText = deriveStatusText(status, statusText);
  return {
    status,
    body: data,
    text,
    ok: status >= 200 && status < 300,
    headers: {},
    statusText: derivedStatusText,
    type
  } as unknown as Response;
};

const deriveStatusText = (status: number, explicit?: string): string => {
  // Simplified mapping is sufficient for these stubbed test responses.
  if (explicit) return explicit;
  if (status === 201) return 'Created';
  if (status >= 400) return 'Error';
  return 'OK';
};
