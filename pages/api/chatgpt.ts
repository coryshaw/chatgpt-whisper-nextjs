// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface MessageSchema {
  role: 'assistant' | 'user' | 'system';
  content: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: req.body.messages,
    }),
  });

  const { choices, error } = await response.json();
  if (response.ok) {
    if (choices?.length > 0) {
      const newSystemMessageSchema: MessageSchema = {
        role: 'system',
        content: choices[0].message.content,
      };
      res.json(newSystemMessageSchema);
    } else {
      // send error
      res.status(500).send('No response from OpenAI');
    }
  } else {
    res.status(500).send(error.message);
  }
}
