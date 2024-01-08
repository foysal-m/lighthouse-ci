// src/mocks.js
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const generateHandler = () => {
  return http.get(
    "https://jsonplaceholder.typicode.com/users",
    ({ request, params, cookies }) => {
      return HttpResponse.json([
        {
          id: 1,
          name: "Fred",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ]);
    }
  );
};

const worker = setupWorker(generateHandler());

worker.start();

export { worker, generateHandler };
