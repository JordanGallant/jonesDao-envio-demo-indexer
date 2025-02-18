import assert from "assert";
import { 
  TestHelpers,
  MiniChefV2_Deposit
} from "generated";
const { MockDb, MiniChefV2 } = TestHelpers;

describe("MiniChefV2 contract Deposit event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for MiniChefV2 contract Deposit event
  const event = MiniChefV2.Deposit.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("MiniChefV2_Deposit is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await MiniChefV2.Deposit.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMiniChefV2Deposit = mockDbUpdated.entities.MiniChefV2_Deposit.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMiniChefV2Deposit: MiniChefV2_Deposit = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      user: event.params.user,
      pid: event.params.pid,
      amount: event.params.amount,
      to: event.params.to,
      incentive: event.params.incentive,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMiniChefV2Deposit, expectedMiniChefV2Deposit, "Actual MiniChefV2Deposit should be the same as the expectedMiniChefV2Deposit");
  });
});
