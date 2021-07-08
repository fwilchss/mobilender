import { shallowMount } from '@vue/test-utils'
import Signup from '@/components/Login/Signup.vue'

describe('componente Signup.vue', () => {
    it('Cambio de valor de variable', () => {
        // Crea una instancia del componente
        const wrapper = shallowMount(Signup);

        //Ejecutamos la funcion
        wrapper.vm.setUser();

        //Revisamos nombre de la función
        expect(wrapper.name)
    })
})
