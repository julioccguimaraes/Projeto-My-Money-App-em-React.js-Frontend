import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import Tabs from "../common/tab/tabs";
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import List from "./billingCycleList";
import Form from "./billingCycleForm";
import { create, update, remove } from "./billingCycleActions";

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tab-list')
        this.props.showTabs('tab-list', 'tab-create')
    }
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro"></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tab-list"></TabHeader>
                            <TabHeader label="Incluir" icon="plus" target="tab-create"></TabHeader>
                            <TabHeader label="Alterar" icon="pencil" target="tab-update"></TabHeader>
                            <TabHeader label="Excluir" icon="trash-o" target="tab-delete"></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tab-list">
                                <List></List>
                            </TabContent>
                            <TabContent id="tab-create">
                                <Form onSubmit={this.props.create} submitLabel="Incluir" submitClass="primary"></Form>
                            </TabContent>
                            <TabContent id="tab-update">
                                <Form onSubmit={this.props.update} submitLabel="Alterar" submitClass="info"></Form>
                            </TabContent>
                            <TabContent id="tab-delete">
                                <Form onSubmit={this.props.remove} readOnly={true} submitLabel="Excluir" submitClass="danger"></Form>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)
}

export default connect(null, mapDispatchToProps)(BillingCycle)