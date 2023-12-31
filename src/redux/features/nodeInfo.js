import { getNodeInfoData } from "@/utils/fetchNodeInfo";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchStatus: "init",
  haveNode: false,
  nodeIsActive: "Loading...",
  isNew: "init",
  active: false,
  nodeAddress: "",
  id: "",
  peerId: "",
  startTime: 0,
  endTime: 0,
  nodeIP: "",
  staked: 0,
  pionStaked: "init",
  activePionStaked: "init",
  tiersMaxStakeAmount: "init",
  onlinePercent: 0,
  messages: [],
  reward: 0,
  rewardPercent: 0,
  history: [],
  downNodeTimes: [],
};

export const fetchNodeInfo = createAsyncThunk(
  "get/fetchNodeInfo",
  async (walletAddress) => {
    const response = await getNodeInfoData(walletAddress);
    return response;
  }
);

export const node = createSlice({
  name: "node",
  initialState,
  reducers: {
    setTiersMaxStakeAmount: (state, action) => {
      state.tiersMaxStakeAmount = action.payload;
    },
    setActivePionStaked: (state, action) => {
      state.activePionStaked = action.payload;
    },
    setPionStaked: (state, action) => {
      state.pionStaked = action.payload;
    },
    resetNodeInfo: (state) => {
      state.nodeInfo = initialState.nodeInfo;
    },
    setNodeInfo: (state, action) => {
      state.nodeInfo = action.payload;
    },
    setNodeActice: (state, action) => {
      state.nodeIsActive = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNodeInfo.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchNodeInfo.fulfilled, (state, action) => {
        const nodeData = action.payload.nodeInfo;
        if (action.payload === false) {
          state.fetchStatus = "faild";
          state.nodeIsActive = "node not found";
        } else {
          state.fetchStatus = "succeeded";
          state.haveNode = nodeData.haveNode;
          state.isNew = nodeData.isNew;
          state.nodeIsActive = action.payload.nodeIsActive;
          state.active = nodeData.active;
          state.nodeAddress = nodeData.nodeAddress;
          state.id = nodeData.id;
          state.peerId = nodeData.peerId;
          state.startTime = nodeData.startTime;
          state.endTime = nodeData.endTime;
          state.nodeIP = nodeData.nodeIP;
          state.staked = nodeData.staked;
          state.onlinePercent = Number(nodeData.onlinePercent.split("%")[0]);
          state.messages = nodeData.messages;
          state.reward = nodeData.rewardAmount;
          state.rewardPercent = nodeData.rewardPercent;
          state.downNodeTimes = nodeData.downNodeTimes;
        }
      })
      .addCase(fetchNodeInfo.rejected, (state, action) => {
        state.fetchStatus = "failed";
      });
  },
});

export const getNodeInfo = (state) => state.node.nodeInfo;
export const {
  setTiersMaxStakeAmount,
  setActivePionStaked,
  setPionStaked,
  resetNodeInfo,
  setNodeInfo,
  setNodeActice,
} = node.actions;
export default node.reducer;
