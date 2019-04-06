export default {
  get: jest.fn().mockResolvedValue({ data: { greeting: 'hello there' } }),
};
