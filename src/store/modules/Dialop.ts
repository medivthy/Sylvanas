import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";
import { NormalizedScopedSlot } from 'vue/types/vnode';

export interface IDialop {
  visible: boolean;
  titleSlot?: NormalizedScopedSlot | undefined;
  contentSlot?: NormalizedScopedSlot | undefined;
  footerSlot?: NormalizedScopedSlot | undefined;
}

@Module({ dynamic: true, store, name: "Dialop", namespaced: true })
class Dialop extends VuexModule implements IDialop {
  public visible: boolean = false;

  public titleSlot?: NormalizedScopedSlot | undefined;

  public contentSlot?: NormalizedScopedSlot | undefined;

  public footerSlot?: NormalizedScopedSlot | undefined;

  @Mutation
  private SET_DIALOP({ visible, titleSlot, contentSlot, footerSlot }: IDialop) {
    debugger;
    this.visible = visible;
    this.titleSlot = titleSlot;
    this.contentSlot = contentSlot;
    this.footerSlot = footerSlot;
  }

  @Action
  public async setDialop(dialop: IDialop) {
    debugger;
    this.SET_DIALOP(dialop);
  }
}

export const DialopModule = getModule(Dialop);
