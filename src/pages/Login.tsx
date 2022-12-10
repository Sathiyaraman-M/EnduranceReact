import {Button, Input, Label} from "reactstrap";

const Login = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ width:'40rem' }}>
                <div className="card-header text-center">
                    <h3>Login</h3>
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="w-75 mb-3">
                        <Label>User Name</Label>
                        <Input />
                    </div>
                    <div className="w-75 mb-3">
                        <Label>Password</Label>
                        <Input type="password" />
                    </div>
                    <Button size="lg" color="primary">Login</Button>
                </div>
            </div>
            
        </div>
    )
};

export default Login;