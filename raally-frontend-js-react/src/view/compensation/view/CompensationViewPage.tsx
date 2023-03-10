import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/compensation/view/compensationViewActions';
import selectors from 'src/modules/compensation/view/compensationViewSelectors';
import CompensationView from 'src/view/compensation/view/CompensationView';
import CompensationViewToolbar from 'src/view/compensation/view/CompensationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CompensationPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.compensation.menu'), '/compensation'],
          [i18n('entities.compensation.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.compensation.view.title')}
        </PageTitle>

        <CompensationViewToolbar match={match} />

        <CompensationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CompensationPage;
