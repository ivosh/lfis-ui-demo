import { connect } from 'react-redux';
import { IState } from '../store/state';
import LoginForm from './LoginForm';
import { loginAction } from './LoginFormActions';

const mapStateToProps = ({ error: { code, detail } }: IState) => ({
  error: { show: code !== undefined || detail !== undefined, code, detail }
});

export default connect(
  mapStateToProps,
  { onSubmit: loginAction }
)(LoginForm);
