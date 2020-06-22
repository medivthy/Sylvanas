import { Vue , Component } from 'vue-property-decorator'

import { IDialop } from "@/store/modules/Dialop";

@Component
export default class Index extends Vue {
	private name = "";

	private openDialop() {
		const dialop: IDialop = {
			visible: true,
			titleNode: (<span>请输入姓名</span>),
			contentNode: (<el-input v-model={ this.name } placeholder="请输入姓名"></el-input>),
			footerNode: (
				<span>
					<el-button type="primary" onClick={ this.confirm }>确定</el-button>,
					<el-button>取消</el-button>
				</span>
			)
		};
		this.$store.dispatch("Dialop/setDialop", dialop);
	}

	private confirm() {
		alert(this.name);
	}

	render(){
		return (
			<el-button onClick={ this.openDialop }>开启弹窗</el-button>
		)
	}
} 