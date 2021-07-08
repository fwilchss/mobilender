import { shallowMount } from '@vue/test-utils'
import ForgotPassword from '@/components/Login/ForgotPassword.vue'

describe('componente ForgotPassword.vue', () => {
    it('Cambio de valor de variable', () => {
        
        // Crea una instancia del componente
        const wrapper = shallowMount(ForgotPassword);

        // revisamos que el valor por defecto sea "false"
        expect(wrapper.vm.msnSendMail).toBe(false);
        
        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.getUser();

        //Evaluamos si cambia el valor
        expect(wrapper.vm.msnSendMail).toBe(true);

        //Revisamos nombre de la función
        expect(wrapper.name)
    }),
    it('Cambio de valor de variable', () => {
        // Crea una instancia del componente
        const wrapper = shallowMount(ForgotPassword);

        // revisamos que el valor por defecto sea vacio
        expect(wrapper.vm.correo).toBe('');
        
        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.getUser();
    })
})
