import { Vue , Component } from 'vue-property-decorator'

import { IDialop } from "@/store/modules/Dialop";

@Component
export default class Index extends Vue {
	private openDialop() {
		const dialop: IDialop = {
			visible: true,
			titleSlot: () => {
				return [
					<span>请输入姓名</span>
				]
			},
			contentSlot: () => {
				return [
					<el-input v-model="input" placeholder="请输入姓名"></el-input>
				];
			},
			footerSlot: () => {
				return [
					<el-button type="primary">确定</el-button>,
					<el-button>取消</el-button>
				];
			}
		};
		this.$store.dispatch("Dialop/setDialop", dialop);
	}

	private confirm

	render(){
		return (
			<el-button onClick={ this.openDialop }>开启弹窗</el-button>
		)
	}
} 