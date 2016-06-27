from locust import HttpLocust, TaskSet, task

class WebsiteTasks(TaskSet):
    @task(8)
    def index(self):
        self.client.get("/locust-test")

    @task(2)
    def postTest(self):
        self.client.post("/locust-test", json={
          "AnswerSetDefinitions": {
                "Id":"00000000-0000-0000-0000-000000000000",
                "Name":"yes/no",
                "OptionDefinitions":"[yes/no]"
              }
        })

    @task(4)
    def putTest(self):
        self.client.put("/locust-test")

    @task(1)
    def deleteTest(self):
        self.client.delete("/locust-test")

class MobileTasks(TaskSet):
    @task(10)
    def index(self):
        self.client.get("/locust-test")

    @task(1)
    def postTest(self):
        self.client.post("/locust-test", json={
          "AnswerSetDefinitions": {
                "Id":"00000000-0000-0000-0000-000000000000",
                "Name":"yes/no",
                "OptionDefinitions":"[yes/no]"
              }
        })

    @task(5)
    def putTest(self):
        self.client.put("/locust-test")

    @task(1)
    def deleteTest(self):
        self.client.delete("/locust-test")

class WebsiteUser(HttpLocust):
    weight = 2
    task_set = WebsiteTasks
    host = 'http://localhost:1337'
    min_wait = 5000
    max_wait = 15000

class MobileUser(HttpLocust):
    weight = 4
    task_set = MobileTasks
    host = 'http://localhost:1337'
    min_wait = 5000
    max_wait = 15000
