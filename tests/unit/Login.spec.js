import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login/Login.vue'

describe('componente Login.vue', () => {
    it('Cambio de valor de variable', () => {
        // Crea una instancia del componente
        const wrapper = shallowMount(Login);

        // revisamos que el valor por defecto sea "false"
        expect(wrapper.vm.msnErrorLogin).toBe(false);
        
        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.loginUser();

        //Evaluamos si cambia el valor
        expect(wrapper.vm.msnErrorLogin).toBe(true);

        //Revisamos nombre de la función
        expect(wrapper.name)
    })
})
