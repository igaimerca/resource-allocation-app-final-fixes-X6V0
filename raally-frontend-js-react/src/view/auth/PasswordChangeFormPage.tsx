import { i18n } from 'src/i18n';
import PasswordChangeForm from 'src/view/auth/PasswordChangeForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { getHistory } from 'src/modules/store';

function PasswordChangeFormPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('auth.passwordChange.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('auth.passwordChange.title')}
        </PageTitle>

        <PasswordChangeForm
          onCancel={() => {
            getHistory().push('/');
          }}
        />
      </ContentWrapper>
    </>
  );
}

export default PasswordChangeFormPage;
