"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class teste02 {
    teste() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.teste2().then(ret => {
                console.log('passou pela função teste');
                return ret;
            });
        });
    }
    teste2() {
        return __awaiter(this, void 0, void 0, function* () {
            return "função string";
        });
    }
}
const teste02Classe = new teste02();
teste02Classe.teste().then(retorno => {
    console.log(retorno);
});
