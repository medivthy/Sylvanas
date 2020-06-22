import { Vue, Component, Prop } from "vue-property-decorator"
import { DialopModule } from "@/store/modules/Dialop";

@Component
export default class BasicDialop extends Vue {
  private onClose() {
    this.$store.dispatch("Dialop/setDialop", {
			visible: false,
			titleNode: (<span>标题</span>),
			contentNode: (<span>内容</span>),
			footerNode: (<span>脚</span>)
		});
  }

  protected render() {
    return (
      <el-dialog
        visible={ DialopModule.visible }
        width="30%"
        before-close={ this.onClose }
      >
        <span slot="title">
          {
            this.$store.state.Dialop.titleNode
          }
        </span>
        {
          this.$store.state.Dialop.contentNode
        }
        <span slot="footer" class="dialog-footer">
          {
            this.$store.state.Dialop.footerNode
          }
        </span>
      </el-dialog>
    );
  }
}
