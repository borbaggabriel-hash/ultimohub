import { memoryLocation } from "wouter/memory-location";

const initialPath = window.location.pathname + window.location.search;
const { hook, navigate } = memoryLocation({ path: initialPath || "/" });

export const memoryHook = hook;
export const memoryNavigate = navigate;
