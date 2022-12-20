import { createStore } from "vuex";

const store = createStore({
  state: {
    logs: [
      {
        id: 1,
        type: "ایونت",
        event: "کالج برنامه نویسی 1",
        ip: "192.168.1.1",
        errorId: "خطا در سیستم",
        errorState: "خطا در سیستم",
        error: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
      {
        id: 2,
        type: "ایونت",
        event: "کالج برنامه نویسی 2",
        ip: "192.168.1.1",
        errorId: "خطا در سیستم",
        errorState: "خطا در سیستم",
        error: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
      {
        id: 3,
        type: "خطا",
        event: "کالج برنامه نویسی 3",
        ip: "192.168.1.1",
        errorId: "خطا در سیستم",
        errorState: "خطا در سیستم",
        error: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
      {
        id: 4,
        event: "کالج برنامه نویسی 4",
        ip: "192.168.1.1",
        type: "ایونت",
        errorId: "خطا در سیستم",
        errorState: "خطا در سیستم",
        error: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
      {
        id: 5,
        event: "کالج برنامه نویسی 5",
        type: "خطا",
        ip: "192.168.1.1",
        errorId: "خطا در سیستم",
        errorState: "خطا در سیستم",
        error: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
    ],

    messages: [
      {
        id: 1,
        date: "123212323",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد با استفاده از طراحان گرافیک است.",
        reply: [
          {
            id: 11,
            date: "123212323",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ",
          },
          {
            id: 12,
            date: "123212323",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ",
          },
        ],
      },
      {
        id: 2,
        date: "123212323",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگیفهوم از صنعت چاپ و ب",
        reply: [
          {
            id: 21,
            date: "123212323",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ل",
          },
        ],
      },
    ],
  },
  getter: {},
  mutations: {
    add_message(state, message) {
      state.messages.push({
        id: state.messages.length + 1,
        date: Date.now(),
        text: message,
        reply: [],
      });
    },
  },
  actions: {
    addMessage({ commit }, message) {
      commit("add_message", message);
    },
  },
});

export default store;
