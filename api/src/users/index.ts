import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function users(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  try {
    const result = {
      title: "fetch /api/users",
      message: `Hello ${new Date().toLocaleString()}`,
    };

    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    };
  } catch (e) {
    return {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Erreur interne /api/projects" }),
    };
  }
}

app.http("users", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: users,
});
