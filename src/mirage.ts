import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/employees", () => {
      return {
        employees: [
          {
            id: "1",
            name: "John Doe",
            position: "Manager",
            email: "john@example.com",
          },
          // Add more pre-created employees here
        ],
      };
    });

    this.post("/employees", (schema: any, request: any) => {
      console.log(schema);
      const newEmployee = JSON.parse(request.requestBody);
      return newEmployee;
    });

    this.put("/employees/:id", (schema: any, request: any) => {
      console.log(schema);
      const id = request.params.id;
      const updatedEmployee = JSON.parse(request.requestBody);
      return updatedEmployee;
    });

    this.delete("/employees/:id", () => {
      return {};
    });
  },
});
