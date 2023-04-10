import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './workspace.scss';

export const Workspace = memo(() => {
  const { t } = useTranslation();
  return (
    <section className="workspace" id="workspace">
      <p className="workspaceSideText">Hand Craft Pottery</p>
      <div className="wrapper workspaceContainer">
        <p className="aboutName workspaceCatName">
          {t('workspace.categories')}
          {' '}
        </p>
        <h2 className="workspaceTitle">
          {t('workspace.porcelain')}
          <span>&</span>
          {' '}
          {t('workspace.pottery')}
        </h2>
        <div className="workspaceCircleContainer">
          <div className="workSpaceCircle yellowCircle">
            <div className="circleContent">
              <div className="circleLogo workspaceVase" />
              <p className="workspaceCircleText">{t('workspace.vases')}</p>
            </div>
          </div>
          <div className="workSpaceCircle orangeCircle">
            <div className="circleContent">
              <div className="circleLogo workspaceMug" />
              <p className="workspaceCircleText">{t('workspace.mugs')}</p>
            </div>
          </div>
          <div className="workSpaceCircle redCircle">
            <div className="circleContent">
              <div className="circleLogo workspacePlate" />
              <p className="workspaceCircleText">{t('workspace.plates')}</p>
            </div>
          </div>
        </div>
        <div className="workspaceColumns">
          <div className="columnLeft">
            <h3 className="columnTitle">{t('workspace.hand')}</h3>
            <p className="columnSubtitle">
              {t('workspace.handInfo')}
            </p>
          </div>
          <div className="columnRight">
            <h3 className="columnTitle">
              {t('workspace.provide')}
            </h3>
            <p className="columnSubtitle">
              {t('workspace.provideInfo')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
})
