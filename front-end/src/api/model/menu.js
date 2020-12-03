const Menu = [
    {title: 'vuex', icon: 'mdi-view-dashboard', path: 'AB'},
    {title: 'vuetify-table1', icon: 'mdi-image', path: 'Table'},
    {title: 'vuetify-table2', icon: 'mdi-image', path: 'TableXin'},
    {title: 'echart', icon: 'mdi-help-box', path: 'DrawChart'},
    {title: 'message-snackbar', icon: 'mdi-arrange-bring-forward', path: 'Message'},
    {title: 'component', icon: 'mdi-alarm-light-outline', path: 'Parent'},
    {title: 'conditional rendering', icon: 'mdi-help-box', path: 'CR'},
    {title: '3D Rotate Card',icon:'mdi-help-box',path: 'Rotate3DCard' },
    {title: 'sweet alert',icon:'mdi-help-box',path: 'SweetAlert' },
    {title: 'package axios',icon:'mdi-help-box',path: 'TestAxios' },
    // {title: 'js output',icon:'mdi-help-box',path: 'Output' },
    {title: 'API test',icon:'mdi-help-box',path: 'ResetPass' },
];
// reorder menu
Menu.forEach(item => {
        if (item.items) {
            item.items.sort((x, y) => {
                let textA = x.title.toUpperCase();
                let textB = y.title.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
        }
    }
);
export default Menu