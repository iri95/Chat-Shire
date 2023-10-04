import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const loginuser = atom({
  key: "loginuser",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const projectId = atom({
  key: "projectId",
  default: "",
});

export const isLogin_recoil = atom({
  key: "isLogin_recoil",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const message = atom({
  key: "message",
  default: "",
});

export const accessToken = atom({
  key: "accessToken ",
  default: "",
});

export const nowProject_recoil = atom<any[]>({
  key: "nowProject_recoil",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const expandedState_recoil = atom<string | false>({
  key: "expandedState",
  default: false, // 초기값 설정
});

// // 앱 종료 시 로컬 스토리지에서 Recoil 데이터 삭제
// window.addEventListener("beforeunload", () => {
//   localStorage.removeItem("recoil-persist-root");
//   localStorage.removeItem("token");
// });

interface Task {
  id: string;
  taskGroupId?: string;
  description: string;
  progress: string;
  isEditing?: boolean;
}

export const tasks_recoil = atom<Task[]>({
  key: "tasks",
  default: [
    {
      id: "0",
      taskGroupId: "0",
      description: "0",
      progress: "ONGOING",
      isEditing: false,
    },
  ],
});

export const workStyle_recoil = atom({
  key: "workStyle_recoil",
  default: "baby",
})

export const workStyleColor_recoil = atom({
  key: "workStyleColor_recoil",
  default: { main: "#8BBCC1", sub: "#D6CB67"}
})

export const keywords_recoil = atom<string[]>({
  key: "keywords_recoil",
  default: [],
});

export const morningCount_recoil = atom({
  key: "morningCount_recoil",
  default: 4
})

export const afternoonCount_recoil = atom({
  key: "afternoonCount_recoil",
  default: 8
})

export const nightCount_recoil = atom({
  key: "nightCount_recoil",
  default: 6
})

export const issueCount_recoil = atom({
  key: "issueCount_recoil",
  default: 20
})

export const allCategoryCount_recoil = atom({
  key: "allCategoryCount_recoil",
  default: {}
})

export const taskCount_recoil = atom({
  key: "taskCount_recoil",
  default: 20
})



