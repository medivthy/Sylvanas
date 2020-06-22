import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";
import { VNode } from 'vue/types/umd';

export interface IDialop {
  visible: boolean;
  titleNode?: VNode;
  contentNode?: VNode;
  footerNode?: VNode;
}

@Module({ dynamic: true, store, name: "Dialop", namespaced: true })
class Dialop extends VuexModule implements IDialop {
  public visible: boolean = false;

  public titleNode?: VNode;

  public contentNode?: VNode;

  public footerNode?: VNode;

  @Mutation
  private SET_DIALOP({ visible, titleNode, contentNode, footerNode }: IDialop) {
    debugger;
    this.visible = visible;
    this.titleNode = titleNode;
    this.contentNode = contentNode;
    this.footerNode = footerNode;
  }

  @Action
  public async setDialop(dialop: IDialop) {
    debugger;
    this.SET_DIALOP(dialop);
  }
}

export const DialopModule = getModule(Dialop);
