import Head from "next/head";
import {
  Layout,
  Card,
  Button,
  Text,
  Row,
  Col,
  Spacer,
  Tooltip,
  Field,
  FieldItem,
} from "@droit/ui";

export default function Web() {
  return (
    <>
      <Head>
        <title>Adrian Jacob - UI Dev take home test - Droit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="https://droit.tech/wp-content/uploads/2022/05/cropped-d-300x300.png"
          sizes="192x192"
        ></link>
      </Head>
      <Layout>
        <Row>
          <Col start={2} end={11}>
            <Spacer y={80} />
            <Text as="h1">Welcome to this form</Text>
            <Text>
              Please answer all the questions below before submitting.
            </Text>
            <Spacer />
          </Col>
        </Row>
        <Row>
          <Col start={2} end={4}>
            <Card>Left panel</Card>
          </Col>
          <Col start={5} end={11}>
            <form id="form">
              <Card>
                <Spacer y={40} />
                <Row cols={7}>
                  <Col start={2} end={6}>
                    <Text as="h2">My details</Text>
                    <Spacer />
                    <Row cols={2}>
                      <Col start={1} end={1}>
                        <Text as="label" for="firstname">
                          First name
                        </Text>
                        <Field placeholder="Type here" id="firstname" />
                      </Col>
                      <Col start={2} end={2}>
                        <Text as="label" for="lastname">
                          Last name
                        </Text>
                        <Field placeholder="Type here" id="lastname" />
                      </Col>
                      <Col start={1} end={1}>
                        <Text as="label" for="country">
                          Country of residence
                        </Text>
                        <Field placeholder="Select country" id="country">
                          <FieldItem value="xxx">Afghanistan</FieldItem>
                          <FieldItem value="xxx">Albania</FieldItem>
                          <FieldItem value="xxx">Algeria</FieldItem>
                          <FieldItem value="xxx">Andorra</FieldItem>
                          <FieldItem value="xxx">Angola</FieldItem>
                          <FieldItem value="xxx">Antigua and Barbuda</FieldItem>
                          <FieldItem value="xxx">Argentina</FieldItem>
                          <FieldItem value="xxx">Armenia</FieldItem>
                          <FieldItem value="xxx">Australia</FieldItem>
                          <FieldItem value="xxx">Austria</FieldItem>
                          <FieldItem value="xxx">Azerbaijan</FieldItem>
                        </Field>
                      </Col>
                      <Col start={2} end={2}>
                        <Text as="label" for="country">
                          City of residence
                        </Text>
                        <Field placeholder="Select city" id="country">
                          <FieldItem value="xxx">Abingdon</FieldItem>
                          <FieldItem value="xxx">Accrington</FieldItem>
                          <FieldItem value="xxx">Acton</FieldItem>
                          <FieldItem value="xxx">Adlington</FieldItem>
                          <FieldItem value="xxx">Angola</FieldItem>
                          <FieldItem value="xxx">Alcester</FieldItem>
                          <FieldItem value="xxx">Aldeburgh</FieldItem>
                          <FieldItem value="xxx">Aldershot</FieldItem>
                          <FieldItem value="xxx">Aldridge</FieldItem>
                          <FieldItem value="xxx">Alford</FieldItem>
                          <FieldItem value="xxx">Alfreton</FieldItem>
                        </Field>
                      </Col>
                    </Row>
                    <Spacer isDivider />
                    <Text as="h2">Profile</Text>
                    <Spacer />
                    <Text as="label" for="email">
                      Favourite cuisine
                    </Text>
                    <div>[RADIO]</div>
                    <Spacer />
                    <Text as="label" for="email">
                      Email address{" "}
                      <Tooltip>
                        This will be used to keep you informed of new products
                        and events
                      </Tooltip>
                    </Text>

                    <Field type="email" placeholder="Type here" id="email" />
                    <Spacer />
                    <Button icon="add" variant="secondary" size="small">
                      Add another
                    </Button>
                  </Col>
                </Row>
                <Spacer y={40} />
              </Card>
              <Spacer y={40} />
              <Row cols={7}>
                <Col start={2} end={6}>
                  <Button variant="primary">Submit</Button>
                  <Button variant="secondary">Cancel</Button>
                </Col>
              </Row>
              <Spacer y={80} />
            </form>
          </Col>
        </Row>
      </Layout>
    </>
  );
}
