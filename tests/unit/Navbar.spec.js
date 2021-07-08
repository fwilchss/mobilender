import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Static/Navbar.vue'

describe('componente Navbar.vue', () => {
    it('Revisamos que exista componente', () => {
        const wrapper = shallowMount(Navbar);
        
        //Revisamos nombre de la función
        expect(wrapper.name)

         // revisamos que el valor por defecto sea "false"
         expect(wrapper.vm.activeCredito).toBe(false);

          // revisamos que el valor por defecto sea "false"
        expect(wrapper.vm.activeSotware).toBe(false);

        //Ejecutamos la funcion
        wrapper.vm.logOut();
    })
})
