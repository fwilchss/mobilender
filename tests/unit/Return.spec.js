import { shallowMount } from '@vue/test-utils'
import Return from '@/components/Static/Return.vue'

describe('componente Return.vue', () => {
    it('Revisamos que exista componente', () => {
        const wrapper = shallowMount(Return);

        //Revisamos nombre de la función
        expect(wrapper.name)
    })
})
