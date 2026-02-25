import Controller from './Controller'
import PPDBController from './PPDBController'
const Controllers = {
    Controller: Object.assign(Controller, Controller),
PPDBController: Object.assign(PPDBController, PPDBController),
}

export default Controllers