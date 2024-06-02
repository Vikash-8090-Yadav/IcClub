module {

    public type Role = {
        #owner;
        #admin;
        #authorized;
    };

    public type Permission = {
        #assign_role;
        #lowest;
    };

    public type Todo = {
        content : Text;
    };

    public type Fact = {
        id : Text;
        name : Text;
        description : Text;
        images : [Text];
    };

};
