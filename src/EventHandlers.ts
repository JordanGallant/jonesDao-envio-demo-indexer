/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  MiniChefV2,
  MiniChefV2_Deposit,
  MiniChefV2_EmergencyWithdraw,
  MiniChefV2_EmergencyWithdrawal,
  MiniChefV2_GovernorUpdated,
  MiniChefV2_Harvest,
  MiniChefV2_LogPoolAddition,
  MiniChefV2_LogSetPool,
  MiniChefV2_LogSushiPerSecond,
  MiniChefV2_LogUpdatePool,
  MiniChefV2_OperatorAdded,
  MiniChefV2_OperatorRemoved,
  MiniChefV2_RoleAdminChanged,
  MiniChefV2_RoleGranted,
  MiniChefV2_RoleRevoked,
  MiniChefV2_Withdraw,
} from "generated";

MiniChefV2.Deposit.handler(async ({ event, context }) => {
  const entity: MiniChefV2_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
    to: event.params.to,
    incentive: event.params.incentive,
  };

  context.MiniChefV2_Deposit.set(entity);
});

MiniChefV2.EmergencyWithdraw.handler(async ({ event, context }) => {
  const entity: MiniChefV2_EmergencyWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
    to: event.params.to,
  };

  context.MiniChefV2_EmergencyWithdraw.set(entity);
});

MiniChefV2.EmergencyWithdrawal.handler(async ({ event, context }) => {
  const entity: MiniChefV2_EmergencyWithdrawal = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    receiver: event.params.receiver,
    tokens: event.params.tokens,
    nativeBalanc: event.params.nativeBalanc,
  };

  context.MiniChefV2_EmergencyWithdrawal.set(entity);
});

MiniChefV2.GovernorUpdated.handler(async ({ event, context }) => {
  const entity: MiniChefV2_GovernorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _oldGovernor: event.params._oldGovernor,
    _newGovernor: event.params._newGovernor,
  };

  context.MiniChefV2_GovernorUpdated.set(entity);
});

MiniChefV2.Harvest.handler(async ({ event, context }) => {
  const entity: MiniChefV2_Harvest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
  };

  context.MiniChefV2_Harvest.set(entity);
});

MiniChefV2.LogPoolAddition.handler(async ({ event, context }) => {
  const entity: MiniChefV2_LogPoolAddition = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pid: event.params.pid,
    allocPoint: event.params.allocPoint,
    lpToken: event.params.lpToken,
    rewarder: event.params.rewarder,
  };

  context.MiniChefV2_LogPoolAddition.set(entity);
});

MiniChefV2.LogSetPool.handler(async ({ event, context }) => {
  const entity: MiniChefV2_LogSetPool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pid: event.params.pid,
    allocPoint: event.params.allocPoint,
    rewarder: event.params.rewarder,
    overwrite: event.params.overwrite,
  };

  context.MiniChefV2_LogSetPool.set(entity);
});

MiniChefV2.LogSushiPerSecond.handler(async ({ event, context }) => {
  const entity: MiniChefV2_LogSushiPerSecond = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sushiPerSecond: event.params.sushiPerSecond,
  };

  context.MiniChefV2_LogSushiPerSecond.set(entity);
});

MiniChefV2.LogUpdatePool.handler(async ({ event, context }) => {
  const entity: MiniChefV2_LogUpdatePool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pid: event.params.pid,
    lastRewardTime: event.params.lastRewardTime,
    lpSupply: event.params.lpSupply,
    accSushiPerShare: event.params.accSushiPerShare,
  };

  context.MiniChefV2_LogUpdatePool.set(entity);
});

MiniChefV2.OperatorAdded.handler(async ({ event, context }) => {
  const entity: MiniChefV2_OperatorAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _newOperator: event.params._newOperator,
  };

  context.MiniChefV2_OperatorAdded.set(entity);
});

MiniChefV2.OperatorRemoved.handler(async ({ event, context }) => {
  const entity: MiniChefV2_OperatorRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _operator: event.params._operator,
  };

  context.MiniChefV2_OperatorRemoved.set(entity);
});

MiniChefV2.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: MiniChefV2_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.MiniChefV2_RoleAdminChanged.set(entity);
});

MiniChefV2.RoleGranted.handler(async ({ event, context }) => {
  const entity: MiniChefV2_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.MiniChefV2_RoleGranted.set(entity);
});

MiniChefV2.RoleRevoked.handler(async ({ event, context }) => {
  const entity: MiniChefV2_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.MiniChefV2_RoleRevoked.set(entity);
});

MiniChefV2.Withdraw.handler(async ({ event, context }) => {
  const entity: MiniChefV2_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
    to: event.params.to,
  };

  context.MiniChefV2_Withdraw.set(entity);
});
