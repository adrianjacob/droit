import { Layout, Card, Button, Text, Row, Col, Spacer } from "@droit/ui";

export default function Web() {
  return (
    <Layout>
      <Row>
        <Col start={2} end={11}>
          <Spacer y={80} />
          <Text as="h1">Welcome to this form</Text>
          <Text>Please answer all the questions below before submitting.</Text>
          <Spacer />
        </Col>
      </Row>
      <Row>
        <Col start={2} end={4}>
          <Card>Left panel</Card>
        </Col>
        <Col start={5} end={11}>
          <form>
            <Card>
              <Spacer />
              <Row cols={7}>
                <Col start={2} end={6}>
                  <Text as="h2">My details</Text>
                  <Spacer />
                  <Row cols={2}>
                    <Col start={1} end={1}>
                      first
                    </Col>
                    <Col start={2} end={2}>
                      last
                    </Col>
                    <Col start={1} end={1}>
                      country
                    </Col>
                    <Col start={2} end={2}>
                      city
                    </Col>
                  </Row>
                  <Spacer isDivider />
                  <Text as="h2">Profile</Text>
                </Col>
              </Row>

              <Spacer />
            </Card>
            <Spacer />
            <Row cols={7}>
              <Col start={2} end={6}>
                BUTTON GROUP
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Layout>
  );
}
