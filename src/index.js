import './js/common'
import './assets/scss/main.scss'

// подключение всех БЭМ файлов
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('./blocks/', true, /\.(js|scss)$/));