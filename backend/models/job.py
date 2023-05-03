class Job:
    def __init__(self, id, employee_id, employer_id,title,description,createDate,lastEditDate = ''):
        self.id = id
        self.employee_id = employee_id
        self.employer_id = employer_id
        self.title = title
        self.description = description
        self.createDate = createDate
        self.lastEditDate = lastEditDate