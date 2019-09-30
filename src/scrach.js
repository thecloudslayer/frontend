import
<form  onSubmit={this.handleSubmitDelete}>
    <Form.Group as={Row} controlId="formHorizontalEmail">

        <Form.Label column sm={1}>
            ID:
        </Form.Label>

        <Col sm={10} md={4}>
            <Form.Control type="text"
                          name="name"
                          placeholder="Enter Name Here"
                          size="lg"
                          value={this.state.formControls.id.value}
                          onChange={this.changeHandler} />
        </Col>

    </Form.Group>

    <Form.Group as={Row} controlId="formHorizontalPassword">
        <Form.Label column sm={1}>
            email:
        </Form.Label>

        <Col sm={10} md={4}>
            <Form.Control type="email"

                          size="lg"
                          name="email"
                          placeholder="email@somewhere.com"
                          value={this.state.formControls.email.value}
                          onChange={this.changeHandler} />
        </Col>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form.Group>
