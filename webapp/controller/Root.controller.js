sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "domae/privat/SteckBriefUI/libs/FileSaver"
], function (Controller) {
    "use strict";

    return Controller.extend("domae.privat.SteckBriefUI.controller.Root", {
        onAfterRendering: function () {
            const oProfExpListModel = this.getView().getModel("profExpList");
            oProfExpListModel.attachRequestCompleted(function () {
                oProfExpListModel.setProperty("/fellowList", this._getFormattedListText.call(this, "mainProfExpFellowList"));
                oProfExpListModel.setProperty("/mbvdList", this._getFormattedListText.call(this, "mainProfExpMbvdList"));
                oProfExpListModel.setProperty("/tcList", this._getFormattedListText.call(this, "mainProfExpTcList"));
                oProfExpListModel.setProperty("/frList", this._getFormattedListText.call(this, "mainProfExpFrList"));
                oProfExpListModel.setProperty("/vwList", this._getFormattedListText.call(this, "mainProfExpVwList"));
                oProfExpListModel.setProperty("/swmList", this._getFormattedListText.call(this, "mainProfExpSwmList"));
            }.bind(this));
        },

        /**
         * Returns a formatted Html-Text for the list section for each professional experience
         * @param sPrefix
         * @returns {string}
         * @private
         */
        _getFormattedListText: function (sPrefix) {
            const oI18nBundle = this.getView().getModel("i18n").getResourceBundle();
            let sHtmlString = "<ul class='sapUiTinyMarginTop htmlList'>";
            let iIndex = 1;
            while (oI18nBundle.hasText(sPrefix + iIndex)) {
                const sListItemOpen = "<li>";
                const sListItemClose = "</li>";
                sHtmlString += sListItemOpen + oI18nBundle.getText(sPrefix + iIndex) + sListItemClose;
                iIndex++;
            }
            sHtmlString += "</ul>";
            return sHtmlString;
        },

        onDownloadProfile: function (oEvent) {
            const oButton = oEvent.getSource();
            this.byId("actionSheet").openBy(oButton);
        },

        onDownloadDocx: async function () {
            const docx = await fetch('../documents/Berater_Profil_2021.docx', {
                method: "POST"
            });
            const blob = await docx.blob();
            saveAs(blob, "Berater_Profil_2021.docx");
        },

        onDownloadPdf: function () {
            window.open(
                "../documents/Berater_Profil_2021.pdf", "_blank");
        }
    });
});
