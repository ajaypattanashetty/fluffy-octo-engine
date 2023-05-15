// Add Acceptance Test for HelloController

// Path: src\__tests__\acceptance\hello.controller.acceptance.ts
// Add the following code to src\__tests__\acceptance\hello.controller.acceptance.ts:
import {Client, expect} from '@loopback/testlab';
import {FluffyOctoEngineApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HelloController', () => {
  let app: FluffyOctoEngineApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /hello', async () => {
    const res = await client.get('/hello').expect(200);
    console.log(res.body);
    // expect(res.body.toString()).to.equal('Hello world!');
    expect(res.text).to.be.equal('Hello world!');
  });
});
