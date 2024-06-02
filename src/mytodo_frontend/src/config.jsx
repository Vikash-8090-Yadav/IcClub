import { Actor, HttpAgent } from "@dfinity/agent";
import {canisterId, idlFactory } from "../../declarations/mytodo_backend/index";
// import { canisterId as scalingCanId } from "../../../declarations/file_scaling_manager/index";
// import { canisterId  as storage} from "../../../declarations/file_storage/index";

export const scalingCanId = "yg4ya-nyaaa-aaaal-qb3eq-cai"
export const storageCanisterId = "kyzel-7yaaa-aaaal-qb73a-cai"


const host = "https://icp0.io";
const agent = new HttpAgent({ host: host });

export const backendActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: "jz3aw-xqaaa-aaaal-qbyna-cai",
});